export const BOARD_SIZE = 20

export function placeFood(snake, random = Math.random) {
  const occupied = new Set(snake.map(({ x, y }) => `${x},${y}`))
  const free = []
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      if (!occupied.has(`${x},${y}`)) free.push({ x, y })
    }
  }
  return free.length ? free[Math.floor(random() * free.length)] : null
}

export function newGame() {
  const snake = [{ x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }]
  return { snake, food: placeFood(snake), direction: { x: 1, y: 0 }, score: 0, phase: 'ready' }
}

export function turn(game, direction) {
  if (direction.x === -game.direction.x && direction.y === -game.direction.y) return game
  return { ...game, direction }
}

export function step(game) {
  if (game.phase !== 'running') return game
  const head = {
    x: (game.snake[0].x + game.direction.x + BOARD_SIZE) % BOARD_SIZE,
    y: (game.snake[0].y + game.direction.y + BOARD_SIZE) % BOARD_SIZE,
  }
  const eating = head.x === game.food?.x && head.y === game.food?.y
  // The tail moves away on a normal step, so that square is safe to enter.
  const body = eating ? game.snake : game.snake.slice(0, -1)
  if (body.some(({ x, y }) => x === head.x && y === head.y)) {
    return { ...game, phase: 'over' }
  }
  const snake = [head, ...game.snake]
  if (!eating) snake.pop()
  const food = eating ? placeFood(snake) : game.food
  return { ...game, snake, food, score: game.score + (eating ? 1 : 0), phase: food ? 'running' : 'won' }
}
