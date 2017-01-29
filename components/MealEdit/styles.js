import React,{Component} from 'react';
import{ StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

      description: {
          fontSize: 25,
          backgroundColor: 'white',
          color: 'blue',
          margin: 80
      },
      day: {
          fontSize: 18,
          backgroundColor: '#4dd0e1',
          color: 'white',
          justifyContent: 'center'
      },
      daySection: {
          fontSize: 25,
          backgroundColor: '#00838f',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center'
      },

      container: {
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center'
      },
      dayTitle: {
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center'
      },
      nav: {
          flex: 1
      },
      image: {
        width: 500,
        height: 165,
        padding: 10
      },
      thumbnail:{
          width: 550,
          height: 81,
          marginRight: 10
  },
      separator: {
          height: 3,
          backgroundColor: '#dddddd'
  },

});

  module.exports = styles
