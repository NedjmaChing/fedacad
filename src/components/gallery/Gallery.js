import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../common/Breadcrumb';
import Image from './Image';
import ImageModal from '../common/ImageModal';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Helmet><title>Photo Gallery - Federal Government Academy Centre for the Gifted and Talented Suleja, Niger State</title></Helmet>
            <Breadcrumb
                link="gallery"
                linkText="Gallery"
                title="Photo Gallery"
            />
            <section className="gallery">
                <section>
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0370.JPG?alt=media&token=7b3998a7-021b-4a3d-81ac-6fe9b23bda9f" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0378.JPG?alt=media&token=e97a64b1-007c-402d-a9cb-586ea75a3fd6" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0860.JPG?alt=media&token=23d8ac8f-d139-4260-b087-a4f1c61846ae" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0865.JPG?alt=media&token=3cdb9c76-3382-4e7a-a881-80fa604a94f1" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0862.JPG?alt=media&token=273a73f8-3e67-4b64-b802-d6f9ec883a0c" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0868.JPG?alt=media&token=f8c6a7cb-7dfc-40af-9957-9e588c4f643a" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0876.JPG?alt=media&token=2e8f3af7-5068-43ef-9bd4-ecda77efcedf" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0879.JPG?alt=media&token=7bdf42e4-454f-47fc-8908-774dc4628a2d" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0880.JPG?alt=media&token=e9981608-d0ea-4de4-ba8d-c0ee89ce4f96" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0894.JPG?alt=media&token=d52f7227-1015-4431-90aa-a4e609b3ebb9" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0901.JPG?alt=media&token=845c4dd2-2405-4147-9f45-31640a998979" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0921.JPG?alt=media&token=df1a5e43-176b-43b9-bc4e-b6ca7e435cbd" />
                    <Image setSelectedImage={setSelectedImage} image="https://firebasestorage.googleapis.com/v0/b/fedacad-927ea.appspot.com/o/website-gallery%2FDSCN0922.JPG?alt=media&token=5ff463f3-d948-4cf4-99b4-350b643aa562" />
                </section>
                {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
            </section>
        </>
    );
};

export default Gallery;