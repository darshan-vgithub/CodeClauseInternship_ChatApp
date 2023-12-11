import React, { useState } from "react";
import { ChatState1 } from "../Context1/ChatProvider1";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/missalaneous/SideDrawer";
import MyChats from "../components/missalaneous/MyChats";
import ChatBox from "../components/missalaneous/ChatBox";

const ChatPage = () => {
  const { user } = ChatState1();
  const [fetchAgain, setFetchAgain] = useState(false);
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
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
