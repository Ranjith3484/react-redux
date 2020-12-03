export default function (state = [], action) {
    switch (action.type) {
      case "Post":
        return [...state, action.payload];
       
      default:
        return state;
    }
  }