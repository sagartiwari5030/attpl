import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);
// This is icons for Side BAr
const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      // Create A Election Managment System
      {
        subheader: t('Election Managment'),
        items: [
          // Candidate Registration By Deepak
          {
            title: t('Candidate'),
            path: paths.dashboard.candidate.root,
            icon: ICONS.banking,
            children: [
              { title: t('Add Candidate'), path: paths.dashboard.candidate.new },
              { title: t('Candidate List'), path: paths.dashboard.candidate.root },
              { title: t('Candidate Details'), path: paths.dashboard.candidate.demo.details },
            ],
          },

          // Voter Registration Config By Thomas
          {
            title: t('Voter Registration'),
            path: paths.dashboard.voter.root,
            icon: ICONS.product,
            children: [
              { title: t('Add Voter'), path: paths.dashboard.voter.new },
              {
                title: t('Show Voters List'),
                path: paths.dashboard.voter.list,
              },
              {
                title: t('Voter Detail'),
                path: paths.dashboard.voter.demo.details,
              },
            ],
          },

          // Expense Management Config by Abhishek

          {
            title: t('Expenses Management'),
            path: paths.dashboard.expenses.root,
            icon: ICONS.invoice,
            children: [
              { title: t('list'), path: paths.dashboard.expenses.root },
              {
                title: t('details'),
                path: paths.dashboard.expenses.demo.details,
              },
              { title: t('create'), path: paths.dashboard.expenses.new },
              { title: t('edit'), path: paths.dashboard.expenses.demo.edit },
            ],
          },

          // Booth Management Config by Avnish
          {
            title: t('Booth Management'),
            path: paths.dashboard.boothmanagement.root,
            icon: ICONS.banking,
            children: [
              { title: t('Add Booth'), path: paths.dashboard.boothmanagement.new },
              { title: t('Booth List'), path: paths.dashboard.boothmanagement.root },
              { title: t('Booth Details'), path: paths.dashboard.boothmanagement.demo.details },
            ],
          },

          // Ward Management Config By Subranshu

          {
            title: t('Ward Management'),
            path: paths.dashboard.wardmanagement.root,
            icon: ICONS.banking,
            children: [
              { title: t('Add Ward'), path: paths.dashboard.wardmanagement.new },
              { title: t('Ward List'), path: paths.dashboard.wardmanagement.root },
              { title: t('Ward Details'), path: paths.dashboard.wardmanagement.demo.details },
            ],
          },

          // Role Management By ankit

          {
            title: t('Role Management'),
            path: paths.dashboard.rolemanagement.root,
            icon: ICONS.banking,
            children: [
              { title: t('Add Role'), path: paths.dashboard.rolemanagement.new },
              { title: t('Role List'), path: paths.dashboard.rolemanagement.root },
              { title: t('Role Details'), path: paths.dashboard.rolemanagement.demo.details },
            ],
          },

          // Election By Saurab

          {
            title: t('Election Management'),
            path: paths.dashboard.electionmanagement.root,
            icon: ICONS.banking,
            children: [
              { title: t('Add Election'), path: paths.dashboard.electionmanagement.new },
              { title: t('Election List'), path: paths.dashboard.electionmanagement.root },
              {
                title: t('Election Details'),
                path: paths.dashboard.electionmanagement.demo.details,
              },
            ],
          },

          // Admin chat section
          {
            
            title: t('Admin Chat'),
            path: paths.dashboard.chat,
            icon: ICONS.chat,

          },
        ],
      },
    ],
    [t]
  );

  return data;
}
