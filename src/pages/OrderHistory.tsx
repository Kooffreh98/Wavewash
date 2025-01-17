import {  IonPage, IonToolbar, IonHeader, IonTitle, IonContent } from '@ionic/react';
import { orders } from "../data/index"
import OrderSegment from '../components/order_segment';
import HistoryNav from '../layout/nav/historyNav';


const History: React.FC = () => {
  return (
    <IonPage>
        <HistoryNav name='ORDER HISTORY'/>
      <IonContent className='ion-padding'>
        <OrderSegment 
              data1={orders}
              data2={orders}
              data3={orders}
        />
      </IonContent>
    </IonPage>
  );
};

export default History;
