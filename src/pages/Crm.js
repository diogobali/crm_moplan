import Board from '../components/Board';
import { HeaderComponent } from '../components/HeaderComponent' ;
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Modal0 from '../components/Modal/modal0.component';
import Modal1 from '../components/Modal/modal1.component';
import Modal2 from '../components/Modal/modal2.component';
import Modal3 from '../components/Modal/modal3.component';
import Modal4 from '../components/Modal/modal4.component';
import ModalInfo from '../components/Modal/modalInfo.component';
import ModalDeclined from '../components/Modal/modalDeclined.component';
import ModalSendAdm from '../components/Modal/modalSendAdm.component';
import ModalReproveAdm from '../components/Modal/modalReproveAdm.component';
import ModalPendente from '../components/Modal/modalPendente.component';
import ModalRegularizarAction from '../components/Modal/modalRegularizarAction.component';

import { ModalProvider0 } from '../components/Modal/modal0.context';
import { ModalProvider1 } from '../components/Modal/modal1.context';
import { ModalProvider2 } from '../components/Modal/modal2.context';
import { ModalProvider3 } from '../components/Modal/modal3.context';
import { ModalProvider4 } from '../components/Modal/modal4.context';
import { ModalProviderInfo } from '../components/Modal/modalInfo.context';
import { ModalProviderDeclined } from '../components/Modal/modalDeclined.context';
import { ModalProviderSendAdm } from '../components/Modal/modalSendAdm.context';
import { ModalProviderReproveAdm } from '../components/Modal/modalReproveAdm.context';
import { ModalProviderPendente } from '../components/Modal/modalPendente.context';
import { ModalProviderRegularizarAction } from '../components/Modal/modalRegularizarAction.context';

import React, { createContext, useState, useEffect, useContext } from 'react';
import SaveFormProvider, { SaveFormContext } from '../contexts/SaveFormContext';

import { useUserContext } from '../contexts/userContext';








export function Crm(){
    const { userData, setUserData } = useUserContext();

    const [data, setData] = useState([]);


    const optionsForm = {
        method: 'POST',
        body: JSON.stringify({
            user: userData.id,
            perfil: userData.perfil
        })
    };


    const getProdutos= async () => {
        fetch("https://moplanseguros.com.br/index.php", optionsForm)
        .then((response) => response.json())
        .then((responseJson) => (
            setData(Object.values(responseJson))
        ));

    }

    useEffect(() => {
        getProdutos();
    },[])
    
    return(

        
        
        <>
        <DndProvider backend={HTML5Backend}>
                <SaveFormProvider>
                <ModalProvider0>
                <ModalProvider1>
                <ModalProvider2>
                <ModalProvider3>
                <ModalProvider4>
                <ModalProviderInfo>
                <ModalProviderDeclined>
                <ModalProviderSendAdm>
                <ModalProviderReproveAdm>
                <ModalProviderPendente>
                <ModalProviderRegularizarAction>

                    <HeaderComponent />
                    {data.length > 0 &&
                        <Board dadosleads={data}/>
                     }
                    <Modal0 />
                    <Modal1 />
                    <Modal2 />
                    <Modal3 />
                    <Modal4 />
                    <ModalInfo />
                    <ModalDeclined />
                    <ModalSendAdm />
                    <ModalReproveAdm />
                    <ModalPendente />
                    <ModalRegularizarAction />
                </ModalProviderRegularizarAction>
                </ModalProviderPendente>
                </ModalProviderReproveAdm>
                </ModalProviderSendAdm>
                </ModalProviderDeclined>
                </ModalProviderInfo>
                </ModalProvider4>
                </ModalProvider3>
                </ModalProvider2>
                </ModalProvider1>
                </ModalProvider0>
                </SaveFormProvider>
            
        </DndProvider>
        </>

    );
    
}

