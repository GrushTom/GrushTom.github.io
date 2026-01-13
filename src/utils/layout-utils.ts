import { backgroundWallpaper } from "../config";

// 背景图片处理工具函数
export const getBackgroundImages = () => {
	const bgSrc = backgroundWallpaper.src;

	if (
		typeof bgSrc === "object" &&
		bgSrc !== null &&
		!Array.isArray(bgSrc) &&
		("desktop" in bgSrc || "mobile" in bgSrc)
	) {
		const srcObj = bgSrc as {
			desktop?: string | string[];
			mobile?: string | string[];
		};
		
		// 处理图片源，支持字符串和数组
		const processImage = (img: string | string[] | undefined): string => {
			if (!img) return "";
			if (Array.isArray(img)) {
				// 随机选择一个图片
				return img[Math.floor(Math.random() * img.length)];
			}
			return img;
		};
		
		return {
			desktop: processImage(srcObj.desktop) || processImage(srcObj.mobile) || "",
			mobile: processImage(srcObj.mobile) || processImage(srcObj.desktop) || "",
		};
	}
	// 如果是字符串，同时用于桌面端和移动端
	return {
		desktop: bgSrc,
		mobile: bgSrc,
	};
};

// 类型守卫函数
export const isBannerSrcObject = (
	src:
		| string
		| string[]
		| { desktop?: string | string[]; mobile?: string | string[] },
): src is { desktop?: string | string[]; mobile?: string | string[] } => {
	return (
		typeof src === "object" &&
		src !== null &&
		!Array.isArray(src) &&
		("desktop" in src || "mobile" in src)
	);
};

// 获取默认背景图片
export const getDefaultBackground = (): string => {
	const src = backgroundWallpaper.src;
	if (typeof src === "string") {
		return src;
	}
	if (src && typeof src === "object" && !Array.isArray(src)) {
		// 优先使用desktop，如果没有则使用mobile
		const processImage = (img: string | string[] | undefined): string => {
			if (!img) return "";
			if (Array.isArray(img)) {
				// 随机选择一个图片
				return img[Math.floor(Math.random() * img.length)];
			}
			return img;
		};
		
		const desktopSrc = processImage(src.desktop);
		const mobileSrc = processImage(src.mobile);
		if (desktopSrc) {
			return desktopSrc;
		}
		if (mobileSrc) {
			return mobileSrc;
		}
	}
	return "";
};

// 检查是否为首页
export const isHomePage = (pathname: string): boolean => {
	// 获取 base URL
	const baseUrl = import.meta.env.BASE_URL || "/";
	const baseUrlNoSlash = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

	if (pathname === baseUrl) return true;
	if (pathname === baseUrlNoSlash) return true;
	if (pathname === "/") return true;

	return false;
};

// 获取横幅偏移量
export const getBannerOffset = (position = "center") => {
	const bannerOffsetByPosition = {
		top: "100vh",
		center: "50vh",
		bottom: "0",
	};
	return (
		bannerOffsetByPosition[position as keyof typeof bannerOffsetByPosition] ||
		"50vh"
	);
};
