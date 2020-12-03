export function increment(){
    return{
      type: "Increment"
    };
  }

export function decrement(){
    return{
      type: "Decrement"
    };
  }

export function insert(data){
    return{
      type: "Insert",
      payload: {
        Firstname:data.Name,
        Password:data.Password
      }
    };
  }

  export function post(data){
    return{
      type: "Post",
      payload: {
        details:data
      }
    };
  }