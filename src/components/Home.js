import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: 'https://picsum.photos/id/123/1200/400',
        altText: 'Turn Your Idea Into Reality!!',
        caption: 'Bachelor of Technology',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/424/1200/400',
        altText: 'Think Locally, Act Globally!!',
        caption: 'Master of Technology',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Think Like a Boss!!',
        caption: 'Master of Business Administration',
        key: 3,
    },
];

const Home = (args) => {
    useEffect (() => {
        document.title = "Home";
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.altText}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    const handleClick1 = () => {
        toast.success("Campus");
    };

    const handleClick2 = () => {
        toast.success("Photo Gallery");
    };

    const handleClick3 = () => {
        toast.success("Careers");
    };

    return (
        <div style={{ position: 'relative', width: '1100px', height: '150px' }}>

            <div style={{ width: '1100px', height: '200px', objectFit: 'cover' }}>
                <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    color: '#ffffff',
                    padding: '10px',
                }}>
                <h1>Welcome To GCET</h1>
            </div>
            <ToastContainer />
            <div style={{ display: "flex", paddingTop: '240px', paddingLeft: '40px', paddingRight: '40px' }}>
                <Button onClick={handleClick1} style={{ textAlign: 'center', border: 'none', backgroundColor: '#689F38', color: 'white', width: '200px', height: '60px', flex: 2 }}>Campus</Button>
                <div style={{ flex: 1 }}></div>
                <Button onClick={handleClick2} type="submit" style={{ textAlign: 'center', border: 'none', backgroundColor: '#E91E63', color: 'white', width: '200px', height: '60px', flex: 2 }}>Photo Gallery</Button>
                <div style={{ flex: 1 }}></div>
                <Button onClick={handleClick3} type="submit" style={{ textAlign: 'center', border: 'none', backgroundColor: '#03A9F4', color: 'white', width: '200px', height: '60px', flex: 2 }}>Careers</Button>
            </div>




        </div>
    );
}

export default Home;