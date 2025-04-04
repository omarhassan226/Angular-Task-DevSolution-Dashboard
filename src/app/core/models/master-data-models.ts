export interface analytics {
  _id: string;
  totalRevenue: {
    currentYear: number;
    lastYear: number;
  };
  todayRevenue: {
    today: number;
    lastDay: number;
  };
  activeUsers: number;
  soldItems: number;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  icon: string;
  createdOn: string;
  __v: number;
}

export interface Status {
  _id: string;
  status: string;
  code: number;
  __v: number;
}

export interface OrderItem {
  _id: string;
  productId: Product;
  statusId: Status;
  quantity: number;
  createdAt: string;
  __v: number;
}
