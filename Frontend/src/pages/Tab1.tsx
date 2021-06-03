import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Garden</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Garden</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="My Garden Page" />
        <IonButton expand="full" fill="outline">Outline + Full</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
