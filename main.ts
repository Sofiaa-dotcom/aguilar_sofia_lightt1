while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 25) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
