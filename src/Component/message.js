const Message = ({contenti,color}) => {
    let style ={
        padding: "1rem",
        marginBotom:"1rem ",
        textAlign:"center",
        color:"#fff",
        fontWeight: "bold",
        backgroundColor: color,
    };

    
    return ( 
    <div style={style} >
        {/* <p>{contenti}</p> */}
        <p dangerouslySetInnerHTML={{__html: contenti}} />
    </div>
     );
}
 

  

  
export default Message;