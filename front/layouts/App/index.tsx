import React, { FC } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Workspace from '@layouts/Workspace';
import DirectMessage from '@pages/DirectMessage';
import Channel from '@pages/Channel';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/workspace" element={<Workspace />}>
          <Route path=":workspace/dm/:id" element={<DirectMessage />} />
          <Route path=":workspace/channel/:channel" element={<Channel />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
