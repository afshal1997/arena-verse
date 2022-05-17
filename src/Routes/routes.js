import * as AuthPages from "../Pages/Auth";
import * as NonAuthPages from "../Pages/NonAuth";

export const nonAuthRoutes = [
  {
    path: '/', page: NonAuthPages.Home
  },
  {
    path: '/about', page: NonAuthPages.About
  },
  {
    path: '/market-place', page: NonAuthPages.MarketPlace
  },
  {
    path:'/white-paper' ,page:NonAuthPages.WhitePaper
  },
  {
    path:'/tokenomics' ,page:NonAuthPages.Tokenomics
  }
]
export const authRoutes = [
  {
    path: '/login', page: AuthPages.Login, isAuth: true
  }
]