import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  COLORS,
  CelebrityFavourites,
  ForYou,
  TrendingPodcasts,
} from '../../constants';
import {CategoryTab, DataHorizontalList, Header} from '../../components';

const categoriesList = ['Comedy', 'Business', 'News', 'Politics'];

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Podcasts" showRightIcon />
      <CategoryTab tabsArray={categoriesList} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.podCastsDataContainer}>
          <DataHorizontalList
            headerTitle={'Trending Podcasts'}
            data={TrendingPodcasts}
          />
          <DataHorizontalList
            headerTitle={'Celebrity Favourites'}
            data={CelebrityFavourites}
          />
          <DataHorizontalList headerTitle={'For You'} data={ForYou} />
        </View>
      </ScrollView>
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    gap: 20,
  },
  podCastsDataContainer: {
    width: '100%',
    height: '80%',
    gap: 30,
  },
});
