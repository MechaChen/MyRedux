const createLeader = () => {
  // leader info
  let info = {
    direction: 'north',
    velocity: 10,
  };

  type Selector = keyof typeof info;

  type Drone = [Selector, (newInfo: typeof info) => void];

  // a space to store all drones
  const drones: Array<Drone> = [];

  // join swarn api
  const invite = (drone: Drone) => {
    drones.push(drone);
  };

  // leave swarn api
  const kickOff = (kickedDrone: Drone) => {
    const kickedDroneIndex = drones.findIndex(
      (drone: Drone) => String(drone) == String(kickedDrone)
    );

    const deleteCount = 1;

    drones.splice(kickedDroneIndex, deleteCount);
  };

  // notify swarn api
  const notifySwarn = (newInfo: typeof info) => {
    // only notify the drones related to some specific info
    for (const [selector, drone] of drones) {
      if (selector === 'direction' && newInfo.direction !== info.direction) {
        drone(newInfo);
      } else if (
        selector === 'velocity' &&
        newInfo.velocity !== info.velocity
      ) {
        drone(newInfo);
      }
    }

    info = newInfo;
  };

  return { invite, kickOff, notifySwarn };
};

export default createLeader;
