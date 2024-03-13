import { paramCase } from 'src/utils/change-case';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------
// this using for main deashboard for all navigate options
export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/hjxMnGUJCjY7pX8lQbS7kn/%5BPreview%5D-Minimal-Web.v5.4.0?type=design&node-id=0-1&mode=design&t=2fxnS70DuiTLGzND-0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // AUTH
  auth: {
    amplify: {
      login: `${ROOTS.AUTH}/amplify/login`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      register: `${ROOTS.AUTH}/amplify/register`,
      newPassword: `${ROOTS.AUTH}/amplify/new-password`,
      forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`,
    },
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
    firebase: {
      login: `${ROOTS.AUTH}/firebase/login`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      register: `${ROOTS.AUTH}/firebase/register`,
      forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`,
    },
    auth0: {
      login: `${ROOTS.AUTH}/auth0/login`,
    },
    supabase: {
      login: `${ROOTS.AUTH}/supabase/login`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      register: `${ROOTS.AUTH}/supabase/register`,
      newPassword: `${ROOTS.AUTH}/supabase/new-password`,
      forgotPassword: `${ROOTS.AUTH}/supabase/forgot-password`,
    },
  },
  authDemo: {
    classic: {
      login: `${ROOTS.AUTH_DEMO}/classic/login`,
      register: `${ROOTS.AUTH_DEMO}/classic/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/classic/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/classic/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/classic/verify`,
    },
    modern: {
      login: `${ROOTS.AUTH_DEMO}/modern/login`,
      register: `${ROOTS.AUTH_DEMO}/modern/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/modern/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/modern/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/modern/verify`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    general: {
      // Overview sidebar Nevigate
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
    },
    user: {
      // Managment Sidebar Nevigate
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    electionManagment: {
      // Election Managment Sidebar Nevigate

      root: `${ROOTS.DASHBOARD}/candidate-management`,
      new: `${ROOTS.DASHBOARD}/candidate-management/add-candidate`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    product: {
      root: `${ROOTS.DASHBOARD}/product`,
      new: `${ROOTS.DASHBOARD}/product/new`,
      details: (id) => `${ROOTS.DASHBOARD}/product/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/product/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/product/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/product/${MOCK_ID}/edit`,
      },
    },
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      new: `${ROOTS.DASHBOARD}/invoice/new`,
      details: (id) => `${ROOTS.DASHBOARD}/invoice/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`,
      },
    },

    // Voter Path by Thomas
    voter: {
      root: `${ROOTS.DASHBOARD}/voter`,
      new: `${ROOTS.DASHBOARD}/voter/new`,
      list: `${ROOTS.DASHBOARD}/voter/list`,
      details: (id) => `${ROOTS.DASHBOARD}/voter/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/voter/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/voter/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/voter/${MOCK_ID}/edit`,
      },
    },

    // expenses Path by Abhiskek
    expenses: {
      root: `${ROOTS.DASHBOARD}/expenses`,
      new: `${ROOTS.DASHBOARD}/expenses/new`,
      details: (id) => `${ROOTS.DASHBOARD}/expenses/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/expenses/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/expenses/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/expenses/${MOCK_ID}/edit`,
      },
    },

    // Candidate Path By Deepak
    candidate: {
      root: `${ROOTS.DASHBOARD}/candidate`,
      new: `${ROOTS.DASHBOARD}/candidate/new`,
      details: (id) => `${ROOTS.DASHBOARD}/candidate/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/candidate/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/candidate/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/candidate/${MOCK_ID}/edit`,
      },
    },
    // Booth Path by Avanish
    boothmanagement: {
      root: `${ROOTS.DASHBOARD}/boothmanagement`,
      new: `${ROOTS.DASHBOARD}/boothmanagement/new`,
      details: (id) => `${ROOTS.DASHBOARD}/boothmanagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/boothmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/boothmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/boothmanagement/${MOCK_ID}/edit`,
      },
    },

    // Booth Path By Subranshu

    wardmanagement: {
      root: `${ROOTS.DASHBOARD}/wardmanagement`,
      new: `${ROOTS.DASHBOARD}/wardmanagement/new`,
      details: (id) => `${ROOTS.DASHBOARD}/wardmanagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/wardmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/wardmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/wardmanagement/${MOCK_ID}/edit`,
      },
    },

    // Role Path By Ankit

    rolemanagement: {
      root: `${ROOTS.DASHBOARD}/rolemanagement`,
      new: `${ROOTS.DASHBOARD}/rolemanagement/new`,
      list: `${ROOTS.DASHBOARD}/rolemanagement/list`,
      details: (id) => `${ROOTS.DASHBOARD}/rolemanagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/rolemanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/rolemanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/rolemanagement/${MOCK_ID}/edit`,
      },
    },

    // Election Path By Saurab

    electionmanagement: {
      root: `${ROOTS.DASHBOARD}/electionmanagement`,
      new: `${ROOTS.DASHBOARD}/electionmanagement/new`,
      details: (id) => `${ROOTS.DASHBOARD}/electionmanagement/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/electionmanagement/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/electionmanagement/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/electionmanagement/${MOCK_ID}/edit`,
      },
    },

    post: {
      root: `${ROOTS.DASHBOARD}/post`,
      new: `${ROOTS.DASHBOARD}/post/new`,
      details: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}`,
      edit: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    order: {
      root: `${ROOTS.DASHBOARD}/order`,
      details: (id) => `${ROOTS.DASHBOARD}/order/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`,
      },
    },
    job: {
      root: `${ROOTS.DASHBOARD}/job`,
      new: `${ROOTS.DASHBOARD}/job/new`,
      details: (id) => `${ROOTS.DASHBOARD}/job/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/job/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`,
      },
    },
    tour: {
      root: `${ROOTS.DASHBOARD}/tour`,
      new: `${ROOTS.DASHBOARD}/tour/new`,
      details: (id) => `${ROOTS.DASHBOARD}/tour/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/tour/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`,
      },
    },
  },
};
