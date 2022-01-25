import React, { FC } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Workspace from '@layouts/Workspace';

const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/workspace" element={<Workspace />}>
          <Route path=":workspace/channel/:channel" element={<Channel />} />
          <Route path=":workspace/dm/:id" element={<DirectMessage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
