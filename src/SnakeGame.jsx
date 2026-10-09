import { useCallback, useEffect, useRef, useState } from 'react'
import { BOARD_SIZE, newGame, step, turn } from './snake-game'
import './SnakeGame.css'

const directions = {
  ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
}

export default function SnakeGame({ onClose }) {
  const dialogRef = useRef(null)
  const [game, setGame] = useState(newGame)
  const gameRef = useRef(game)
  const queuedDirection = useRef(null)
  const gesture = useRef(null)

  const commit = useCallback((next) => {
    gameRef.current = next
    setGame(next)
  }, [])

  const steer = useCallback((direction) => {
    const current = gameRef.current
    if (current.phase === 'ready') {
      commit({ ...turn(current, direction), phase: 'running' })
    } else if (current.phase === 'running' && !queuedDirection.current) {
      const next = turn(current, direction)
      if (next !== current) queuedDirection.current = direction
    }
  }, [commit])

  function restart() {
    queuedDirection.current = null
    commit({ ...newGame(), phase: 'running' })
  }

  const togglePause = useCallback(() => {
    const current = gameRef.current
    if (current.phase === 'running' || current.phase === 'paused') {
      commit({ ...current, phase: current.phase === 'running' ? 'paused' : 'running' })
    }
  }, [commit])

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const keydown = (event) => {
      if (directions[event.key]) {
        event.preventDefault()
        steer(directions[event.key])
      } else if (event.code === 'Space' && event.target.tagName !== 'BUTTON') {
        event.preventDefault()
        togglePause()
      }
    }
    const pause = () => {
      if (gameRef.current.phase === 'running') commit({ ...gameRef.current, phase: 'paused' })
    }
    const visibility = () => { if (document.hidden) pause() }
    const timer = window.setInterval(() => {
      let current = gameRef.current
      if (current.phase !== 'running') return
      if (queuedDirection.current) current = turn(current, queuedDirection.current)
      queuedDirection.current = null
      commit(step(current))
    }, 140)
    dialog.addEventListener('keydown', keydown)
    window.addEventListener('blur', pause)
    document.addEventListener('visibilitychange', visibility)
    return () => {
      window.clearInterval(timer)
      dialog.removeEventListener('keydown', keydown)
      window.removeEventListener('blur', pause)
      document.removeEventListener('visibilitychange', visibility)
      document.body.style.overflow = previousOverflow
      // Unmounting removes the dialog; avoid a close event during StrictMode cleanup.
    }
  }, [commit, steer, togglePause])

  const occupied = new Set(game.snake.map(({ x, y }) => `${x},${y}`))
  const overlay = { ready: 'A little study break?', paused: 'Paused', over: 'One more round?', won: 'You filled the board!' }[game.phase]

  return <dialog ref={dialogRef} className="snake-dialog" aria-labelledby="snake-title" onClose={onClose} onClick={(event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }}>
    <div className="snake-panel">
      <div className="snake-heading">
        <h2 id="snake-title">Snake<span>.</span></h2>
        <button className="snake-close" type="button" onClick={() => dialogRef.current.close()} aria-label="Close Snake" autoFocus>×</button>
      </div>
      <div className="snake-status"><span aria-live="polite">Score: {game.score}</span><p>Arrow keys or swipe to steer.</p></div>
      <div className="snake-board-wrap">
        <div className="snake-board" role="img" aria-label="Snake game board. Collect orange dots and avoid your tail. Edges wrap to the opposite side."
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId)
            gesture.current = { x: event.clientX, y: event.clientY }
          }}
          onPointerMove={(event) => {
            if (!gesture.current) return
            const dx = event.clientX - gesture.current.x
            const dy = event.clientY - gesture.current.y
            if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return
            steer(Math.abs(dx) > Math.abs(dy) ? { x: Math.sign(dx), y: 0 } : { x: 0, y: Math.sign(dy) })
            gesture.current = { x: event.clientX, y: event.clientY }
          }}
          onPointerUp={() => { gesture.current = null }} onPointerCancel={() => { gesture.current = null }}>
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
            const x = index % BOARD_SIZE
            const y = Math.floor(index / BOARD_SIZE)
            const head = x === game.snake[0].x && y === game.snake[0].y
            const food = x === game.food?.x && y === game.food?.y
            return <span key={index} className={`snake-cell${occupied.has(`${x},${y}`) ? ' occupied' : ''}${head ? ' head' : ''}${food ? ' food' : ''}`} />
          })}
        </div>
        {overlay && <div className="snake-overlay" aria-live="polite"><strong>{overlay}</strong><span>{game.phase === 'ready' ? 'Press Play, an arrow key, or swipe.' : game.phase === 'paused' ? 'Resume when you’re ready.' : `Final score: ${game.score}`}</span></div>}
      </div>
      <div className="snake-actions">
        <button type="button" onClick={game.phase === 'paused' || game.phase === 'running' ? togglePause : restart}>{game.phase === 'running' ? 'Pause' : game.phase === 'paused' ? 'Resume' : game.phase === 'ready' ? 'Play' : 'Play again'}</button>
        <button type="button" className="snake-restart" onClick={restart}>Restart</button>
      </div>
    </div>
  </dialog>
}
