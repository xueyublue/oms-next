// dashboard
export const ROUTE_DASHBORAD = "/dashboard";
// instance
export const ROUTE_INSTANCE_DETAILS = "/instance/details";
export const ROUTE_INSTANCE_SGA = "/instance/sga";
export const ROUTE_INSTANCE_BANNERS = "/instance/banners";
export const ROUTE_INSTANCE_RESOURCE_LIMIT = "/instance/resourcelimit";
export const ROUTE_INSTANCE_PARAMETERS = "/instance/parameters";
// performance
export const ROUTE_PERFORMANCE_SESSION = "/performance/session";
// space
export const ROUTE_SPACE_TABLESPACE = "/space/tablespace";
export const ROUTE_SPACE_TOP_TABLES = "/space/toptables";
export const ROUTE_SPACE_TOP_INDEXES = "/space/topindexes";
export const ROUTE_SPACE_TABLE_RECORDS = "/space/tablerecords";
// user
export const ROUTE_USER_PROFILES = "/user/profiles";
export const ROUTE_USER_ROLES = "/user/roles";
export const ROUTE_USER_ROLE_PRIVILEGES = "/user/roleprivileges";
export const ROUTE_USER_USERS = "/user/users";
export const ROUTE_USER_USER_PRIVILEGES = "/user/userprivileges";
// session
export const ROUTE_SESSION = "/session";

export const RouteToPageName = (route) => {
  if (!route) return "";
  if (route === ROUTE_DASHBORAD) return "Dashboard";
  if (route === ROUTE_INSTANCE_DETAILS) return "Instance Details";
  if (route === ROUTE_INSTANCE_SGA) return "SGA Configuration";
  if (route === ROUTE_INSTANCE_BANNERS) return "Banners";
  if (route === ROUTE_INSTANCE_RESOURCE_LIMIT) return "Resource Limit";
  if (route === ROUTE_INSTANCE_PARAMETERS) return "Instance Parameters";
  if (route === ROUTE_PERFORMANCE_SESSION) return "Session Performance";
  if (route === ROUTE_SPACE_TABLESPACE) return "Tablespace";
  if (route === ROUTE_SPACE_TOP_TABLES) return "Top Tables";
  if (route === ROUTE_SPACE_TOP_INDEXES) return "Top Indexes";
  if (route === ROUTE_SPACE_TABLE_RECORDS) return "Table Records";
  if (route === ROUTE_USER_PROFILES) return "Profiles";
  if (route === ROUTE_USER_ROLES) return "Roles";
  if (route === ROUTE_USER_ROLE_PRIVILEGES) return "Role Privileges";
  if (route === ROUTE_USER_USERS) return "Users";
  if (route === ROUTE_USER_USER_PRIVILEGES) return "User Privileges";
  if (route === ROUTE_SESSION) return "Sessions";
  return "";
};
