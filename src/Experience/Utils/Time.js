import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now()     // timestamp when the experience starts (stay the same)
        this.current = this.start   // current timestamp (change every frame)
        this.elapsed = 0            // time spent since start experience
        this.delta = 16             // time spent since previous frame (by default 16 because is close to how many miliseconds is between 2 frames in 60 fps)
    
            window.requestAnimationFrame(() => 
            {
                this.tick()
            })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('tick')

        window.requestAnimationFrame(() => 
        {
            this.tick()
        })
    }
}