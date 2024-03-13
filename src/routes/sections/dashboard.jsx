import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/app'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
// PRODUCT
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// ORDER
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
// INVOICE
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// USER
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));
// BLOG
const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// JOB
const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// TOUR
const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// FILE MANAGER
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// APP
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// TEST RENDER PAGE BY ROLE
const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// BLANK PAGE
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// VOTER
const Addvoter = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/AddVoter')
);
const ShowvoterList = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/ShowVoterList')
);
const ShowVoterDetail = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/VoterDetail')
);
const VoterEditDetail = lazy(
  () => import('src/pages/dashboard/election-managment-services/VoterManagment/EditVoter')
);

// EXPENSES
const ExpensesListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/ExpenseManagment/list')
);
const ExpensesDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/ExpenseManagment/details')
);
const ExpensesEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/ExpenseManagment/edit')
);
const ExpensesCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/ExpenseManagment/new')
);

// CANDIDATE BY DEEPAK

const CandidateListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/list')
);
const CandidateCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/new')
);
const CandidateDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/details')
);
const CandidateEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/candidate/edit')
);

// BOOTH BY AVNISH
const BoothListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/list')
);
const BoothDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/details')
);
const BoothEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/edit')
);
const BoothCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/boothmanagement/new')
);

// Ward By Shubranshu

const WardListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/list')
);
const WardCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/new')
);
const WardDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/details')
);
const WardEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/wardmanagement/edit')
);

// Role Management By Ankit

const RoleListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/rolemanagement/list')
);
const RoleCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/rolemanagement/new')
);
const RoleDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/rolemanagement/details')
);
const RoleEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/rolemanagement/edit')
);

// Election By Saurab

const ElectionListPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/list')
);
const ElectionCreatePage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/new')
);
const ElectionDetailsPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/details')
);
const ElectionEditPage = lazy(
  () => import('src/pages/dashboard/election-managment-services/electionmanagement/edit')
);

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'ecommerce', element: <OverviewEcommercePage /> },
      { path: 'analytics', element: <OverviewAnalyticsPage /> },
      { path: 'banking', element: <OverviewBankingPage /> },
      { path: 'booking', element: <OverviewBookingPage /> },
      { path: 'file', element: <OverviewFilePage /> },
      {
        path: 'user',
        children: [
          { element: <UserProfilePage />, index: true },
          { path: 'profile', element: <UserProfilePage /> },
          { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'new', element: <ProductCreatePage /> },
          { path: ':id/edit', element: <ProductEditPage /> },
        ],
      },
      // voter Route By Thomas
      {
        path: 'voter',
        children: [
          { element: <Addvoter />, index: true },
          { path: 'list', element: <ShowvoterList /> },
          { path: 'new', element: <Addvoter /> },
          { path: ':id', element: <ShowVoterDetail /> },
          { path: ':id/edit', element: <VoterEditDetail /> },
        ],
      },

      // expenses Route By Abhishek
      {
        path: 'expenses',
        children: [
          { element: <ExpensesListPage />, index: true },
          { path: 'list', element: <ExpensesListPage /> },
          { path: ':id', element: <ExpensesDetailsPage /> },
          { path: ':id/edit', element: <ExpensesEditPage /> },
          { path: 'new', element: <ExpensesCreatePage /> },
        ],
      },

      // Candidate Route By Deepak
      {
        path: 'candidate',
        children: [
          { element: <CandidateListPage />, index: true },
          { path: 'list', element: <CandidateListPage /> },
          { path: 'new', element: <CandidateCreatePage /> },
          { path: ':id', element: <CandidateDetailsPage /> },
          { path: ':id/edit', element: <CandidateEditPage /> },
        ],
      },

      // Booth Route By Avnish
      {
        path: 'boothmanagement',
        children: [
          { element: <BoothListPage />, index: true },
          { path: 'list', element: <BoothListPage /> },
          { path: 'new', element: <BoothCreatePage /> },
          { path: ':id', element: <BoothDetailsPage /> },
          { path: ':id/edit', element: <BoothEditPage /> },
        ],
      },

      // WardManagement Route By Subranshu
      {
        path: 'wardmanagement',
        children: [
          { element: <WardListPage />, index: true },
          { path: 'list', element: <WardListPage /> },
          { path: 'new', element: <WardCreatePage /> },
          { path: ':id', element: <WardDetailsPage /> },
          { path: ':id/edit', element: <WardEditPage /> },
        ],
      },

      // RoleManagement Route By Ankit

      {
        path: 'rolemanagement',
        children: [
          { element: <RoleListPage />, index: true },
          { path: 'list', element: <RoleListPage /> },
          { path: 'new', element: <RoleCreatePage /> },
          { path: ':id', element: <RoleDetailsPage /> },
          { path: ':id/edit', element: <RoleEditPage /> },
        ],
      },

      //  Election Route By Saurab

      {
        path: 'electionmanagement',
        children: [
          { element: <ElectionListPage />, index: true },
          { path: 'list', element: <ElectionListPage /> },
          { path: 'new', element: <ElectionCreatePage /> },
          { path: ':id', element: <ElectionDetailsPage /> },
          { path: ':id/edit', element: <ElectionEditPage /> },
        ],
      },

      {
        path: 'order',
        children: [
          { element: <OrderListPage />, index: true },
          { path: 'list', element: <OrderListPage /> },
          { path: ':id', element: <OrderDetailsPage /> },
        ],
      },
      {
        path: 'invoice',
        children: [
          { element: <InvoiceListPage />, index: true },
          { path: 'list', element: <InvoiceListPage /> },
          { path: ':id', element: <InvoiceDetailsPage /> },
          { path: ':id/edit', element: <InvoiceEditPage /> },
          { path: 'new', element: <InvoiceCreatePage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <BlogPostsPage />, index: true },
          { path: 'list', element: <BlogPostsPage /> },
          { path: ':title', element: <BlogPostPage /> },
          { path: ':title/edit', element: <BlogEditPostPage /> },
          { path: 'new', element: <BlogNewPostPage /> },
        ],
      },
      {
        path: 'job',
        children: [
          { element: <JobListPage />, index: true },
          { path: 'list', element: <JobListPage /> },
          { path: ':id', element: <JobDetailsPage /> },
          { path: 'new', element: <JobCreatePage /> },
          { path: ':id/edit', element: <JobEditPage /> },
        ],
      },
      {
        path: 'tour',
        children: [
          { element: <TourListPage />, index: true },
          { path: 'list', element: <TourListPage /> },
          { path: ':id', element: <TourDetailsPage /> },
          { path: 'new', element: <TourCreatePage /> },
          { path: ':id/edit', element: <TourEditPage /> },
        ],
      },
      { path: 'file-manager', element: <FileManagerPage /> },
      { path: 'mail', element: <MailPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'kanban', element: <KanbanPage /> },
      { path: 'permission', element: <PermissionDeniedPage /> },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
