import React from 'react';
import FeedItem from './components/FeedItem';

const Feed: React.FC = () => {
    return (
        <div>
            <FeedItem
            fullName='Hakan Yücel'
            username='@hakannyucel'
            content='İçine attıkların kaderin olur, içinden atamadıkların ise kaderin'
            commentCount={4500}
            retweetCount={1250}
            likeCount={9100}
            viewCount={1.2} />
            <FeedItem
            fullName='Hakan Yücel'
            username='@hakannyucel'
            content='Uçmayı çok seviyorsan, bazen düşmesini de bileceksin.'
            commentCount={1500}
            retweetCount={100}
            likeCount={5200}
            viewCount={1} />
            <FeedItem
            fullName='Hakan Yücel'
            username='@hakannyucel'
            content='Ya farkıma vardığında, farkın kalmamış olursa?'
            commentCount={9500}
            retweetCount={5203}
            likeCount={9942}
            viewCount={3.2} />
            <FeedItem
            fullName='Hakan Yücel'
            username='@hakannyucel'
            content='Ne demiş şair, mutluluğu benimle bulan benimdir. Geri kalanlar ise sadece gelip gidici bir misafir.'
            commentCount={4500}
            retweetCount={1250}
            likeCount={9100}
            viewCount={1.2} />
        </div>
    )
}

export default Feed;