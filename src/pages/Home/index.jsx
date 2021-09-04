import React from 'react';
import { Messages, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';

import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import dialogsJSON from 'dialogs.json';

import './Home.scss';

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined />
            <span>Список диалогов</span>
          </div>
          <FormOutlined />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs userId={0} items={dialogsJSON} />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>
          <EllipsisOutlined style={{ fontSize: '24px' }} />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
