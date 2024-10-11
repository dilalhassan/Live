import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const ZegoCloud = () => {
  const { id } = useParams();

  const meeting = (element) => {
    const appID = 338852869;
    const serverSecret = "1a0ba8ccf09c875d1200dd42dac10082";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Math.random().toString(),
      id
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
       
      },
      sharedLinks:[{name:'meeting link',
        url:`http://locahost:3000/room/${id}`
      }]
    });
  };

  return (
    <div ref={meeting} >
      
    </div>
  );
};

export default ZegoCloud;
