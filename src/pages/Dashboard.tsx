import { API_ENDPOINTS } from "../api";
import Factory from "../components/FactoryItem/FactoryItem";
import { FactoryProps } from "../types";
import styles from "./dashboard.module.css";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const factoryItems: FactoryProps[] = [
    {
      title: "ACCOUNTS",
      endpoint: API_ENDPOINTS.accounts,
      config: {},
    },
    {
      title: "ASSETS",
      endpoint: API_ENDPOINTS.assets,
      config: {},
    },
    {
      title: "CUSTOMERS",
      endpoint: API_ENDPOINTS.customers,
      config: {},
    },
    {
      title: "DATAPOINTS",
      endpoint: API_ENDPOINTS.datapoints,
      config: {},
    },
    {
      title: "DEVICES",
      endpoint: API_ENDPOINTS.devices,
      config: {
        refreshInterval: 300,
      },
    },
    {
      title: "DOCUMENTS",
      endpoint: API_ENDPOINTS.documents,
      config: {},
    },
    {
      title: "FORMS",
      endpoint: API_ENDPOINTS.forms,
      config: {},
    },
    {
      title: "MEDIA",
      endpoint: API_ENDPOINTS.media,
      config: {},
    },
    {
      title: "INVITES",
      endpoint: API_ENDPOINTS.invites,
      config: {},
    },
    {
      title: "MESSAGES",
      endpoint: API_ENDPOINTS.messages,
      config: {
        refreshInterval: 10000,
      },
    },
    {
      title: "namespaces",
      endpoint: API_ENDPOINTS.namespaces,
      config: {},
    },
    {
      title: "orders",
      endpoint: API_ENDPOINTS.orders,
      config: {},
    },
    {
      title: "patients",
      endpoint: API_ENDPOINTS.patients,
      config: {},
    },
    {
      title: "relationships",
      endpoint: API_ENDPOINTS.relationships,
      config: {},
    },
    {
      title: "rules",
      endpoint: API_ENDPOINTS.rules,
      config: {},
    },
    {
      title: "templates",
      endpoint: API_ENDPOINTS.templates,
      config: {},
    },
    {
      title: "users",
      endpoint: API_ENDPOINTS.users,
      config: {},
    },
    {
      title: "workflows",
      endpoint: API_ENDPOINTS.workflows,
      config: {},
      cardStyles: {},
    },
  ];

  return (
    <div className={styles.dashboard}>
      {factoryItems.map((props) => (
        <Factory key={props.endpoint} {...props} />
      ))}
    </div>
  );
};

export default Dashboard;
