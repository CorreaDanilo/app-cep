import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  errorText: {
    color: '#c0392b',
    marginTop: 12,
    textAlign: 'center',
  },
  loadingContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 6,
    color: '#333',
  },
  value: {
    color: '#333',
    flexShrink: 1,
  },
});