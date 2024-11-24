import { Card } from "primereact/card";
import Navbar from "../components/Navbar";
import "../index.css";

function Welcome() {
  return (
    <>
      <div className="flex flex-column w-full h-screen surface-200">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full flex justify-content-center align-items-center">
          <div className="flex justify-content-center align-items-center w-6 h-full">
            <Card className="flex flex-column w-6 h-30rem">
                
            </Card>
          </div>
          <div className="flex flex-column justify-content-center align-items-center w-6 h-full">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
