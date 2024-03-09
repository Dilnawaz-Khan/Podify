import {Image, StyleSheet, Text, View} from 'react-native';
import {Icons} from '../../assets/images/icons';
import {COLORS, Fonts} from '../../constants';

interface HeaderProps {
  title: string;
  showRightIcon?: boolean;
}

const Header = ({title, showRightIcon}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>{title}</Text>

      {showRightIcon && (
        <View style={styles.rightIconContainer}>
          <Image source={Icons.search} style={styles.rightIcon} />
        </View>
      )}
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headingTxt: {
    fontSize: 22,
    fontFamily: Fonts.Bold,
    color: COLORS.White,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  rightIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.White,
  },
});
