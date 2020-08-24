import React from 'react';
import { motion } from 'framer-motion';

const ImageModal = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (e)=> {
        if (e.target.classList.contains('image-modal')) {
            setSelectedImage(null);
        }
    };

    return (
        <motion.div 
            className="image-modal"
            onClick={handleClick}
            initial={{ transform: 'scale(0)'}}
            animate={{ transform: 'scale(1)', transition: { ease: 'easeInOut' } }}
        >
            <img 
                src={selectedImage} 
                alt="Federal Government Academy Suleja Gallery"
                className="modal-image"
            />
        </motion.div>
    );
};

export default ImageModal;