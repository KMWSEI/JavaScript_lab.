export default class Target{
    constructor(x, y){
        const target = Matter.Bodies.circle(
            x,
            y,
            20,
            {
                label: 'target',
                render: {
                    fillStyle: 'blue',
                    strokeStyle: 'blue',
                },
                isStatic: true
            }
        )
        return target
    }
}