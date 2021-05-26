import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Account Info',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'All Assessments',
    path: '/assessments',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Schedule Assessment',
    path: '/scheduleAssessment',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];
