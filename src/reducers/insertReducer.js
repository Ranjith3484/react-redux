export default function (state = [], action) {
    switch (action.type) {
      case "Insert":
        return [...state, action.payload];
       
      default:
        return state;
    }
  }