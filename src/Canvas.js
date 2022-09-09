import React, { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
	const { draw, fps = 30, establishContext, establishCanvasWidth, width = "100%", height = "100vh", ...rest } = props;
	const canvasRef = useRef(null);
	const [context, setContext] = useState(null);

	const resizeCanvas = (context) => {
		const canvas = context.canvas;
		const { width, height } = canvas.getBoundingClientRect();

		if (canvas.width !== width || canvas.height !== height) {
			const { devicePixelRatio: ratio = 1 } = window;
			canvas.width = width * ratio;
			canvas.height = height * ratio;
            console.log(width, height);
			if (establishCanvasWidth) {
				establishCanvasWidth(canvas.width);
			}
			context.scale(ratio, ratio);
			return true;
		}
		return false;
	};

    const handleWindowResize = () => {
		//i.e. value other than null or undefined
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");
			setContext(ctx);
			resizeCanvas(ctx);
			if (establishContext) {
				establishContext(ctx);
			}
		} else {
			// if canvasRef set to null, keep state variable consistent with this
			setContext(null);
		}
    };

	useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
	}, []);

	useEffect(() => {
		let frameCount = 0;
		let animationFrameId, fpsInterval, now, then, elapsed;

		if (context) {
			const render = () => {
				animationFrameId = window.requestAnimationFrame(render);
				now = Date.now();
				elapsed = now - then;
				if (elapsed > fpsInterval) {
					// Get ready for next frame by setting then=now, but also adjust for your
					// specified fpsInterval not being a multiple of RAF's interval (16.7ms)
					then = now - (elapsed % fpsInterval);
					frameCount++;
					draw();
				}
			};
			const startRendering = (fps) => {
				fpsInterval = 1000 / fps;
				then = Date.now();
				render();
			};
			startRendering(fps);
		}
		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw, context, resizeCanvas]);
	return (
		<canvas ref={canvasRef} {...rest} style={{ backgroundColor: "#000", width, height }} />
	);
};

export default Canvas;