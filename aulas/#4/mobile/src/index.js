import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';

import api from './services/api';

export default function App(){
    const [ projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, [])



    async function handleAddProject(){
        const response = await api.post('projects',{
            title:`Novo projeto ${Date.now()}`,
            owner: "André Souza"
        });
        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
            <SafeAreaView style={styles.container}>
                <FlatList 
                data={projects}
                keyExtractor={project => project.id}
                renderItem={( {item:project} ) => (
                    <Text style={styles.project}>{project.title}</Text>
                )}
                />
                
            <TouchableOpacity 
                activeOpacity={0.6} 
                style={styles.button} 
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar projeto</Text>    
            </TouchableOpacity>
            </SafeAreaView>

        </>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#7159c1",
    },
    project:{
        color:"#FFFFFF",
        fontSize:30
    },
    button:{
        alignSelf:'stretch',
        backgroundColor:"#FFF",
        margin:20,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:16
    }
})