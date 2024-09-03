import { secondsToMs } from "./secondsToMs"

describe('secondsToMs test', ()=>{
    it('transform time to minutes and seconds',()=>{
       expect(secondsToMs(360)).toBe("06:00")
    })
    it('transform time to minutes and seconds',()=>{
       expect(secondsToMs(0)).toBe("00:00")
    })
    it('transform time to minutes and seconds',()=>{
       expect(secondsToMs(3601)).toBe("00:01")
    })
    it('transform time to minutes and seconds',()=>{
       expect(secondsToMs(3599)).toBe("59:59")
    })
    it('transform time to minutes and seconds',()=>{
       expect(secondsToMs(-1)).toBe("0-1:0-1")
    })
})