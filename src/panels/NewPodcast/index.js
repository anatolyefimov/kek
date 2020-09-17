import React from 'react';
import PropTypes from 'prop-types';

import { 
	Panel, 
    PanelHeader, 
    PanelHeaderBack,
    FormLayout,
    Placeholder,
    Div,
    File,
    Input,
    FormLayoutGroup, Group
} from '@vkontakte/vkui';

import Icon56GalleryOutline from '@vkontakte/icons/dist/56/gallery_outline';

import './NewPodcast.css'

const NewPodcast = ({ id, go }) => {
    return (
        <Panel id={id} className='NewPodcast'>
            <PanelHeader  left={<PanelHeaderBack onClick={go} data-to='home'/>}>
                Новый подкаст
            </PanelHeader>
            <FormLayout>
                <Div style={{
                    display: 'flex',
                    padding: 0
                }}>
                    <File
                        mode='overlay_primary'
                        className='cover-input'
                    >
                        <Icon56GalleryOutline
                            className='cover-input__icon'
                            width={32}
                            height={32}
                        />
                    </File>
                    <FormLayout Component='div'>
                        <Input 
                            top='Название' 
                            placeholder='Введите название подкаста' 
                            className='NewPodcast__name'/>
                    </FormLayout>

                </Div>
            </FormLayout>
           
            
            
        </Panel>
    )
}

NewPodcast.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
};

export default NewPodcast;
