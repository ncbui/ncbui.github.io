import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { View } from './Themed';
import { MarkdownView } from 'react-native-markdown-view'


export default function ResumeView() {
    return (
         <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.resumeContainer}>
                    <MarkdownView style={styles.getStartedText}>
						{{{content}}}
                    </MarkdownView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: StatusBar.currentHeight,
      },
    scrollView: {
        marginHorizontal: 200,
        marginVertical: 20,
        marginBottom:50,
      },
    resumeContainer: {
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingBottom:50,
      borderRadius: 20,
      backgroundColor: '#ffd9da',
    },
    getStartedText: {
      fontSize: 16,
      lineHeight: 10,
      textAlign: 'right',
    },
  });  
  