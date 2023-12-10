import React from "react";
import { ChatState1 } from "../Context1/ChatProvider1";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/missalaneous/SideDrawer";
import MyChats from "../components/missalaneous/MyChats";
import ChatBox from "../components/missalaneous/ChatBox";

const ChatPage = () => {
  const { user } = ChatState1();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
