import React, { FC, useCallback } from 'react';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import useSWR from 'swr';
import gravatar from 'gravatar';
import {
  AddButton,
  Channels,
  Chats,
  Header,
  LogOutButton,
  MenuScroll,
  ProfileImg,
  ProfileModal,
  RightMenu,
  WorkspaceButton,
  WorkspaceModal,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from './styles';

const Workspace: FC = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 3000,
  });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  if (data === undefined) {
    return <Navigate to={'/login'}></Navigate>;
  }

  return (
    <>
      <Header>
        <RightMenu>
          <span>
            <ProfileImg src={gravatar.url(data.email, { s: '28px', d: 'retro' })} alt={data.nickname} />
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>Sleact</WorkspaceName>
          <MenuScroll></MenuScroll>
        </Channels>
        <Chats>Chat</Chats>
      </WorkspaceWrapper>
      {children}
    </>
  );
};

export default Workspace;
