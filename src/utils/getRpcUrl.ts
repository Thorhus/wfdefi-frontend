import { sample } from "lodash";

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3];

const getRpcUrl = () => {
  return sample(nodes);
};

export default getRpcUrl;
