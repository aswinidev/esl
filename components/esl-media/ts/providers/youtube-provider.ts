/**
 * Youtube API provider for {@link ESLMedia}
 * @version 1.0.0
 * @author Alexey Stsefanovich (ala'n), Yuliya Adamskaya
 * @extends BaseProvider
 */
import {loadScript} from '../../../esl-utils/dom/script';
import {ESLMedia} from '../esl-media';
import {BaseProvider, PlayerStates} from '../esl-media-provider';
import ESLMediaProviderRegistry from '../esl-media-registry';
import PlayerVars = YT.PlayerVars;
import {generateUId} from '../../../esl-utils/misc/uid';

const DEFAULT_ASPECT_RATIO = 16 / 9;

export class YouTubeProvider extends BaseProvider<HTMLDivElement | HTMLIFrameElement> {
    private _api: YT.Player;

    static get providerName() {
        return 'youtube';
    }

    private static _coreApiPromise: Promise<void>;

    protected static getCoreApi() {
        if (!YouTubeProvider._coreApiPromise) {
            YouTubeProvider._coreApiPromise = new Promise((resolve) => {
                if (window.YT && window.YT.Player) return resolve(window.YT);
                loadScript('YT_API_SOURCE', '//www.youtube.com/iframe_api');
                const cbOrigin = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = () => {
                    try {
                        (typeof cbOrigin === 'function') && cbOrigin.apply(window);
                    } catch (err) { // eslint-disable-line
                        // Do Nothing
                    }
                    return resolve(window.YT);
                };
            });
        }
        return YouTubeProvider._coreApiPromise;
    }

    protected static mapOptions(sm: ESLMedia): PlayerVars {
        return {
            enablejsapi: 1,
            origin: location.origin,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 0, // eslint-disable-line
            autoplay: Number(sm.autoplay),
            controls: Number(sm.controls),
            disablekb: Number(!sm.controls), // TODO: criteria
            autohide: Number(!sm.controls) // TODO: criteria
        };
    }

    protected static buildIframe(sm: ESLMedia) {
        const el = document.createElement('div');
        el.id = 'esl-media-yt-' + generateUId();
        el.className = 'esl-media-inner esl-media-youtube';
        el.title = sm.title;
        el.setAttribute('aria-label', el.title);
        el.setAttribute('frameborder', '0');
        el.setAttribute('tabindex', '0');
        el.setAttribute('allowfullscreen', 'yes');
        return el;
    }

    public bind() {
        this._el = YouTubeProvider.buildIframe(this.component);
        this.component.appendChild(this._el);
        this._ready = YouTubeProvider.getCoreApi().then(
            () => (new Promise((resolve, reject) => {
                this._api = new YT.Player(this._el.id, {
                    videoId: this.component.mediaId,
                    events: {
                        onError: (e) => {
                            this.component._onError(e);
                            reject(this);
                        },
                        onReady: () => resolve(this),
                        onStateChange: this._onStateChange
                    },
                    playerVars: YouTubeProvider.mapOptions(this.component)
                });
            }))
        );
        this._ready.then(() => {
            this._el = this._api.getIframe();
            if (this.component.muted) {
                this._api.mute();
            }
            this.component._onReady();
        });
    }

    public unbind() {
        this.component._onDetach();
        if (this._api) {
            this._api.destroy();
            this._api = null;
        }
        const embedded = this.component.querySelectorAll('.esl-media-youtube');
        Array.from(embedded || []).forEach((el: Node) => el.parentNode.removeChild(el));
    }

    private _onStateChange = (event: YT.OnStateChangeEvent) => {
        switch (+event.data) {
            case PlayerStates.PLAYING:
                this.component._onPlay();
                break;
            case PlayerStates.PAUSED:
                this.component._onPaused();
                break;
            case PlayerStates.ENDED:
                if (this.component.loop) {
                    this._api.playVideo();
                } else {
                    this.component._onEnded();
                }
                break;
        }
    };

    public focus() {
        if (this._el instanceof HTMLIFrameElement && this._el.contentWindow) {
            this._el.contentWindow.focus();
        }
    }

    public get state() {
        if (this._api && typeof this._api.getPlayerState === 'function') {
            return this._api.getPlayerState() as number as PlayerStates;
        }
        return PlayerStates.UNINITIALIZED;
    }

    public get duration() {
        return this._api ? this._api.getDuration() : 0;
    }

    public get currentTime() {
        return this._api ? this._api.getCurrentTime() : 0;
    }

    public get defaultAspectRatio(): number {
        return DEFAULT_ASPECT_RATIO;
    }

    public seekTo(pos: number) {
        this._api.seekTo(pos, false);
    }

    public play() {
        if (this.state === PlayerStates.ENDED) {
            this._api.seekTo(0, false);
        }
        this._api.playVideo();
    }

    public pause() {
        this._api.pauseVideo();
    }

    public stop() {
        this._api.stopVideo();
    }
}

ESLMediaProviderRegistry.register(YouTubeProvider, YouTubeProvider.providerName);

// typings
declare global {
    interface YT extends Promise<void> {
        Player: YT.Player,
    }

    interface Window {
        YT?: YT;
        onYouTubeIframeAPIReady?: () => void;
    }
}