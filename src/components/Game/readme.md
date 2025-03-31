# Snake Readme

Snake game built using HTML Canvas, ReactJS, and MUI. 

Project page -> SnakeGame -> SnakeCanvas -> HTML Canvas and AnimationFrames

SnakeCanvas manages:
- AnimationFrames managed by hook useLayoutEffect(). 
    - Called at top level of component that fires before browser repaints screen. Used to position renderings.
    - If updating state from useLayoutEffect(), all other Effects immediately called
        - We setFrameCounter() if game in session, set snakeState() is game over
        - If game is over, then reset snake by setting default snake in snakeState.
        - TODO: functions and objects defined inside component may also cause re-rendering
        - State update block browser from repainting screen. Can slow app. useEffect() is often prefered. 
    - Watches for changed to state.shouldStart
    - FPS managed by wrapping `setTimeout(() => {requestAnimationFrame(animate)}, 1000 / fps)`

Game play and updates managed by hook useEffect():
- synchronizes component with external system, 
    - like Canvas HTML, setInterval() and clearInterval(), windows.addEventListener()
- Each cycle runs cleanup and setup code. Everytime dependencies change, Effect runs cleanup, then setup code. On final dismount, run cleaup code again. 

Tests written with RTL and Vite
- Writing tests to make class more robust.
| Progress | Tests |
|----|----|
| Completed |  Constants|
| In progress | Point |

Known bugs
- Caterpillar gets stuck in decision freeze and circles until it works itself into a know
    - Solution: reset food to break it out of the executive function freeze
- seems to be chasing a ghost