import Pic from "./img/Nespresso-Essenza-mini-03.jpg";
function App() {
  return (
    <div>
    <div  Style={{border:"solid 1px black", maxWidth: "100vw"  }}>
       
      <h1 className="title red">hisham</h1>
      <br/>
      <img src={Pic} alt="" width={250} height={250}  />

      <br/>
      <img src={process.env.PUBLIC_URL+"/image/pic.jpg"} alt="" width={250} height={250}  />

    </div>
    <video width="750" height="500" controls >
      <source src="https://www.youtube.com/watch?v=464GkuHGp-w" type="video/mp4"/>
     </video>
   </div>
  );
}

export default App;

