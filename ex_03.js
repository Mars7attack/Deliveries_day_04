function fillBus (peopleAtBusStops, busSeats){
    let inBus = 0
  let bus = 0
  while (bus != peopleAtBusStops.length) {
      if(inBus > busSeats){
    return bus 
    }
    inBus += peopleAtBusStops[bus]
    bus += 1
  }
  return -1
}
