const createLeader = () => {
  // leader info
  let info = {
    direction: 'north',
    velocity: 10,
  };

  type Drone = (newInfo: typeof info) => void;

  // a space to store all the drones swarn
  const drones: Array<Drone> = [];

  // join swarn api
  const joinSwarn = (drone: Drone) => {
    drones.push(drone);
  };

  const leaveSwarn = (leaveDrone: Drone) => {
    const leaveDroneIdx = drones.findIndex(
      (drone) => drone.toString() == leaveDrone.toString()
    );

    const deleteCount = 1;
    drones.splice(leaveDroneIdx, deleteCount);
  };

  // notify swarn api
  const notifySwarn = (newInfo: typeof info) => {
    for (let drone of drones) {
      drone(newInfo);
    }

    info = newInfo;
  };

  return { joinSwarn, leaveSwarn, notifySwarn };
};

export default createLeader;
