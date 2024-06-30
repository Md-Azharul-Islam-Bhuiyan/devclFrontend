import ProductList from "./ProductList";


const DashboardRole = () => {
    const role = 'ADMIN';
    if(role === 'ADMIN'){
      return (
        <></>
      )
    }else if(role === 'VENDOR'){
      
      return (
      <></>
      )
    }else{
      return(
       <></>
      )
    }
};

export default DashboardRole;