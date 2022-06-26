// import Chat from '@components/Chat';
import Chat from '@components/Chat';
import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IChat, IDM } from '@typings/db';
import React, { FC, RefObject, useCallback, VFC } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface Props {
  chatData: IDM[] | undefined;
}

const ChatList: VFC<Props> = ({ chatData }) => {
  return (
    <ChatZone>
      {chatData?.map((chat) => (
        <Chat key={chat.id} data={chat} />
      ))}
    </ChatZone>
  );
};

export default ChatList;
