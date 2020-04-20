class Article {
    static get GetDefaultArticleDataFromML () {
        return [{
            it: 'Get Default Data From ML',
            status: 1
        }];
    }

    static get SaveArticle () {
        return [{
            it: 'save article',
            status: 1
        }];
    }

    static get GetUserArticleDataWithML () {
        return [{
            it: 'Get User Data With ML',
            status: 1
        }];
    }

    static get SaveArticleFormatting () {
        return [{
            it: 'Save Article Formatting',
            status: 1
        }];
    }

    static get GetSavedClips () {
        return [{
            it: 'Get Saved Clips',
            status: 1
        }];
    }

    static get UpdateSavedClips () {
        return [{
            it: 'Update saved clips',
            status: 1
        }];
    }

    static get DeleteSavedClips () {
        return [{
            it: 'Delete Saved Clips',
            status: 1
        }];
    }

    static get UpdateSaveClipBool () {
        return [{
            it: 'Update SaveClipBool',
            status: 1
        }];
    }

    static get RemoveCategoryId () {
        return [{
            it: 'Remove Category Id',
            status: 1
        }];
    }

    static get AddCategoryId () {
        return [{
            it: 'Add Category Id',
            status: 1
        }];
    }

    static get SaveTopFacts () {
        return [{
            it: 'Save Top Facts',
            status: 1
        }];
    }

    static get ShareModifiedArticle () {
        return [{
            it: 'Share Modified Article',
            status: 1
        }];
    }

    static get DetectLanguage () {
        return [{
            it: 'It should give one detect language on confidence level',
            data: 'President Donald Trump is taking his case to the American people over why they should back him in the partial government shutdown.His primetime address on Tuesday will be about the Humanitarian and National Security crisis on our Southern Border, he tweeted. But Trump is facing an uphill climb: polls show a majority of Americans blame him and Republicans for the shutdowns, and the majority have also consistently been opposed to his idea of a border wall with Mexico. The average of polls taken since the shutdown began indicate that Americans are blaming Republicans for the shutdown',
            status: 1
        }];
    }

    static get GetBibFromObj() {
        return [
            {
                it: 'Get Bib from object',
                status: 0
            },
            {
                it: 'Get Bib from object',
                options: {
                    articleId: '5d80df478884f06c748a5523'
                },
                status: 1
            }
        ];
    }

    static get ManuallyAddBib() {
        return [
            {
                it: 'Add bib manually without data',
                status: 1
            },
            {
                it: 'Add bib manually',
                options: {
                    articleId: '5d80df478884f06c748a5523',
                    data: {
                        'journal': 'Artificial Intelligence for Engineering Design, Analysis and Manufacturing',
                        'title': 'Blurring the boundaries',
                        'pages': '7--10',
                        'number': 1,
                        'volume': 21,
                        'publisher': 'Cambridge University Press (CUP)',
                        'month': 'jan',
                        'year': 2007,
                        'url': 'https://doi.org/10.1017\\%2Fs0890060407070047',
                        'doi': '10.1017/s0890060407070047',
                        'author': 'MAHER, MARY LOU'
                    },
                    entry: 'article'
                },
                status: 1
            },
            {
                it: 'Add bib manually with shorter author name',
                options: {
                    articleId: '5d80df478884f06c748a5523',
                    data: {
                        'journal': 'Artificial Intelligence for Engineering Design, Analysis and Manufacturing',
                        'title': 'Blurring the boundaries',
                        'pages': '7--10',
                        'number': 1,
                        'volume': 21,
                        'publisher': 'Cambridge University Press (CUP)',
                        'month': 'jan',
                        'year': 2007,
                        'url': 'https://doi.org/10.1017\\%2Fs0890060407070047',
                        'doi': '10.1017/s0890060407070047',
                        'author': 'MAH'
                    },
                    entry: 'article'
                },
                status: 1
            },
            {
                it: 'Add bib manually without author and year',
                options: {
                    articleId: '5d80df478884f06c748a5523',
                    data: {
                        'journal': 'Artificial Intelligence for Engineering Design, Analysis and Manufacturing',
                        'title': 'Blurring the boundaries',
                        'pages': '7--10',
                        'number': 1,
                        'volume': 21,
                        'publisher': 'Cambridge University Press (CUP)',
                        'month': 'jan',
                        'url': 'https://doi.org/10.1017\\%2Fs0890060407070047',
                        'doi': '10.1017/s0890060407070047'
                    },
                    entry: 'article'
                },
                status: 1
            },
            {
                it: 'Add bib manually with wrond id',
                options: {
                    articleId: '5d80df478884f06c748a5524',
                    data: {
                        'journal': 'Artificial Intelligence for Engineering Design, Analysis and Manufacturing',
                        'title': 'Blurring the boundaries',
                        'pages': '7--10',
                        'number': 1,
                        'volume': 21,
                        'publisher': 'Cambridge University Press (CUP)',
                        'month': 'jan',
                        'url': 'https://doi.org/10.1017\\%2Fs0890060407070047',
                        'doi': '10.1017/s0890060407070047'
                    },
                    entry: 'article'
                },
                status: 1
            }
        ];
    }

    static get GetMultipleBibFromObj() {
        return [
            {
                it: 'Get Bib from object',
                status: 0
            },
            {
                it: 'Get Bib from object',
                options: {
                    articleIds: ['5d80df478884f06c748a5523']
                },
                status: 1
            }
        ];
    }
}
module.exports = Article;
