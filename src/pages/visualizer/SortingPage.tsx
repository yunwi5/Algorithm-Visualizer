import { Helmet } from 'react-helmet';
import SortingVisualizer from '../../components/sorting-visualizer/SortingVisualizer';
import SortingIntroList from '../../components/sorting-visualizer/sorting-info/SortingIntro';
import { useModalContext } from '../../store/modal-context';
import IntroModal from '../../components/ui/IntroModal';

const SortingPage: React.FC = () => {
    const { modalVisible, showModal } = useModalContext();

    return (
        <>
            <Helmet>
                <title>Sorting Visualizer</title>
                <meta
                    name="description"
                    content="Sorting page that animates 5 different sorting algorithms, and allows users to compare the run times of the popular sorting algorithms."
                />
            </Helmet>
            <SortingVisualizer />
            {modalVisible && (
                <IntroModal introJsxList={SortingIntroList} onClose={() => showModal(false)} />
            )}
        </>
    );
};

export default SortingPage;
